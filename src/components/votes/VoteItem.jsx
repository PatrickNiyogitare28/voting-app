import './styles.css';
const VoteItem = (props) => {
    const {id, name, avatar, votes} = props.vote;
    return (
        <div className='vote-wrapper'>
          <img src={avatar} alt={name} />
          <div className='data-wrapper'>
            <h1>{name}</h1>
            <h2>{votes}</h2>
          </div>
          <div className='button-wrapper'>
              <button>Vote</button>
          </div>
        </div>
    );
}

export default VoteItem;