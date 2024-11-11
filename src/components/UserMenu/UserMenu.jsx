import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p className={css.user}>Wellcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout)}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
