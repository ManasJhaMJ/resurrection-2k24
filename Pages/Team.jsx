import TeamCard from '../src/components/Team/TeamCard'

function Team() {
    return (
        <section id='team'>
            <div className='team'>
                <TeamCard
                    img='https://ressurection-fest2024.vercel.app/static/media/aman.907312cc25beb32362fa.png'
                    name='Team Member'
                    position='Core Team'
                />
                <TeamCard
                    img='https://ressurection-fest2024.vercel.app/static/media/sonakshi.8c954de6bd2cc07e9b4b.png'
                    name='Team Member'
                    position='Core Team'
                />
                <TeamCard
                    img='https://ressurection-fest2024.vercel.app/static/media/monika.2d98b4d5cd3f89fc061c.png'
                    name='Team Member'
                    position='Core Team'
                />
                <TeamCard
                    img='https://ressurection-fest2024.vercel.app/static/media/unnati.3b5d4ecef68698abd595.png'
                    name='Team Member'
                    position='Core Team'
                />
            </div>
        </section>
    )
}

export default Team