using System;
using System.Collections.Generic;

namespace WeeFee.Model
{
    public partial class Users
    {
        public Users()
        {
            Accounts = new HashSet<Accounts>();
        }

        public int Id { get; set; }
        public string Email { get; set; }

        public ICollection<Accounts> Accounts { get; set; }
    }
}
