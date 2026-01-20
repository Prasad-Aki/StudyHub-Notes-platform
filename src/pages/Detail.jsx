import './Detail.css'
import notesData from '../data/notesdata'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {

    const navigatetoback = useNavigate()

    const backnotes = () => {
        navigatetoback(-1)
    }

    const { id } = useParams()

    const noteid = notesData.find(
        (item) => item.id.toString() === id
    )

    if (!noteid) {
        return <h2 style={{ fontSize: '50px', textAlign: 'center', marginTop: '18rem' }} >Note not found 📭</h2>
    }

    return (
        <>

            <div className='full'>
                <div className='alldata'>
                    <div className="leftcontent">
                        <img src={noteid.image} alt="" />
                    </div>
                    <div className="rightcontent">
                        <h1 className='heading' >{noteid.title}</h1>
                        <p>{noteid.overview}</p>
                        <h2 >{noteid.description}</h2>
                    </div>
                </div>
                <div className="endcontect">
                    <div className="summery">
                        <h1>Summery : </h1>
                        {noteid.summary.map((arrid, index) => (
                            <p key={index} >{arrid}</p>
                        ))}
                    </div>

                    <button onClick={() => {
                        window.open(noteid.pdf, "_blank")
                    }} className='do'>View Pdf 📋</button>
                </div>
                <button onClick={backnotes} className='backbtn'>back</button>
            </div>
        </>
    )
}

export default Detail