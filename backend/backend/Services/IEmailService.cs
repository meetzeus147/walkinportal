using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IEmailService
    {
        public Task SendTransactionalEmailAsync(string jsonBody);
    }
}
