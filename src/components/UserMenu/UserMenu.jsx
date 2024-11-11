import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { FaSignOutAlt } from 'react-icons/fa'; // Іконка для кнопки виходу
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        <FaSignOutAlt className={css.icon} />
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
