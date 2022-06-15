import './styles.css';
const VoteItem = ({vote, styles, imgStyles, actions}) => {
    const {id, name, avatar, votes} = vote;
    return (
        <div className='vote-wrapper' style={styles}>
          <img src={avatar} alt={name} style={imgStyles} />
          <div className='data-wrapper'>
            <h1>{name}</h1>
            <h2>{votes}</h2>
          </div>
          {!actions && 
          <div className='button-wrapper'>
              <button>Vote</button>
          </div>
          }
          {actions}
        </div>
    );
}

export default VoteItem;