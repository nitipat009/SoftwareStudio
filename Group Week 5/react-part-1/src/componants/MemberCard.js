/* eslint-disable jsx-a11y/alt-text */
import "./MemberCard.css";
import Vote from "./Vote"
function MemberCard(props) {
  return (
    <div className="card">
      <div className="top">
        <div className="top-left">
          <h1 className="font-link">{props.firstname} {props.lastname}</h1>
          <h2>{props.id}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.des }}>
            {/* {props.des} */}
          </div>
        </div>
        <div className="top-right">
            <img src={props.image} />
        </div>
      </div>
      <div className="bottom">
          <Vote />
      </div>
    </div>
  );
}

export default MemberCard;
