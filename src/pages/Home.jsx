import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {

    const fromhomenavigate = useNavigate()

    const hometonotes = () => {
        fromhomenavigate('/notes')
    }

    return (
        <>
            <div className="content">
                <h1>StudyHub</h1>
                <p>StudyHub helps students find subject-wise notes, search important topics, and revise faster using clean, structured content. All notes are carefully organized for quick understanding and exam preparation.</p>
                <button onClick={hometonotes} className='explorebtn'>Explore Notes</button>
            </div>
        </>
    )
}

export default Home