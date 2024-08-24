function TeamCard({ img, name, position }) {
    return (
        <div className='team-card'>
            <div className='team-img'>
                <img src={img} alt={name} />
            </div>
            <div className='team-text'>
                <p>{name}</p>
                <h2>{position}</h2>
            </div>
        </div>
    )
}

export default TeamCard