import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const navigate = useNavigate();
  const { avatar, email, first_name, last_name, id } = user;

  return (
    <div onClick={() => navigate(`/user/${id}`)} className="cardWrapper">
      <h3>
        {first_name} {last_name}
      </h3>
      <img src={avatar} alt="avatar" />
      <p>{email} </p>
    </div>
  );
};

export default Card;
