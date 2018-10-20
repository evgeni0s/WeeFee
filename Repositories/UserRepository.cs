using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using WeeFee.Model;

namespace WeeFee.Repositories
{
    public class UserRepository : Repository<Users>, IUserRepository
    {
        private WeeFeeDbContext context;
        public UserRepository(WeeFeeDbContext context) : base(context)
        {
            this.context = context;
        }

        public Users GetUserWithAccounts(int id)
        {
            return context.Users.Include(a => a.Accounts).SingleOrDefault(a => a.Id == id);
        }

        public IEnumerable<Users> GetTestUser(int count)
        {
            return context.Users.Take(count);
        }

        public IEnumerable<Accounts> GetTestAccount(int count)
        {
            return context.Accounts.Take(count);
        }

        public WeeFeeDbContext WeeFeeDbContext
        {
            get { return this.context; }
        }
    }
}