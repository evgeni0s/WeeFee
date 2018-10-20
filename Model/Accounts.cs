using System;
using System.Collections.Generic;

namespace WeeFee.Model
{
    public partial class Accounts
    {
        public int Id { get; set; }
        public string Password { get; set; }
        public int UserId { get; set; }

        public Users User { get; set; }
    }
}
