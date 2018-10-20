using System.Collections.Generic;
using WeeFee.Model;

namespace WeeFee.Repositories
{
    public interface IUserRepository : IRepository<Users>
    {
        IEnumerable<Users> GetTestUser(int count);
        IEnumerable<Accounts> GetTestAccount(int count);
    }
}