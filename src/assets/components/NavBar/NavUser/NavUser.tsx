import "./navUser.sass";
import navCartIcon from "../../../images/icon-cart.svg";
import userAvatar from "../../../images/image-avatar.png";
const NavUser = () => {
  return (
    <div className='navuser-container'>
      <button className='navcart'>
        <img src={navCartIcon} alt='' loading='lazy' />
      </button>
      <button className='navuser'>
        <img src={userAvatar} alt='' />
      </button>
    </div>
  );
};

export default NavUser;
