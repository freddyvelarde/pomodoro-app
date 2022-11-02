export default function notication() {
  const getPermissionToShowNotifications = () => {
    if (Notification.permission !== "default") return;
    window.Notification.requestPermission().then((permission) =>
      console.log(permission)
    );
  };
  const showNotification = () => {
    console.log("hello");
  };

  return { getPermissionToShowNotifications, showNotification };
}
