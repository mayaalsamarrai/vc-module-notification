using VirtoCommerce.NotificationsModule.Core.Model;

namespace VirtoCommerce.NotificationsModule.Core.Types
{
    public class TwoFactorSmsNotification : SmsNotification
    {
        public string Token { get; set; }
    }
}
