import CardWrapper from "../CardWrapper";
import HeartIcon from "../HeartIcon";

const Card = ({
  id,
  name,
  username,
  company,
  email,
  address,
  phone,
  website,
  isFavorite,
  onClickHandler,
}) => {
  return (
    isFavorite && (
      <CardWrapper class="bg-gray-50 border border-gray-300 p-6 rounded-[20px] text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* <img src={MessiPhoto} alt="Lionel Messi" class="photo" /> */}
        <div class="info">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Company:</strong> {company}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Website:</strong> {website}
          </p>
          {/* Heart Icon */}
          {/* {hearticon} */}
          <HeartIcon
            id={id}
            onClickHandler={onClickHandler}
            isFavorite={isFavorite}
          />
        </div>
      </CardWrapper>
    )
  );
};

export default Card;
