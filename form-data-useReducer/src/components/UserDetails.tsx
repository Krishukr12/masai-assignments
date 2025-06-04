export const UserDetails = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return (
    <div>
      <div>User Email: {email}</div>
      <div>User Password: {password}</div>
    </div>
  );
};
