import PropTypes from 'prop-types';


function List(props){
    return(
        <>
          <ul>
            <li>{props.title}</li>
            <li>{props.about}</li>
          </ul>
        </>
    );
}

List.propTypes = {
    title:  PropTypes.string.isRequired,
    about:PropTypes.number
};

List.defaultProps = {
    title: "Guest",
    about: 18,
  };

export default List;