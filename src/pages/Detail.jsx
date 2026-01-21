import './Detail.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Detail = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [note, setNote] = useState(null)
    const [loading, setLoading] = useState(true)

    const backnotes = () => {
        navigate(-1)
    }

    useEffect(() => {
        axios.get(`/api/notes/${id}`)
            .then((res) => {
                setNote(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <h2 style={{ textAlign: 'center', marginTop: '18rem' }}>
                Loading...
            </h2>
        )
    }

    if (!note) {
        return (
            <h2 style={{ fontSize: '50px', textAlign: 'center', marginTop: '18rem' }}>
                Note not found 📭
            </h2>
        )
    }

    return (
        <div className='full'>
            <div className='alldata'>
                <div className="leftcontent">
                    <img src={note.image} alt={note.title} />
                </div>

                <div className="rightcontent">
                    <h1 className='heading'>{note.title}</h1>
                    <p>{note.overview}</p>
                    <h2>{note.description}</h2>
                </div>
            </div>

            <div className="endcontect">
                <div className="summery">
                    <h1>Summary :</h1>
                    {note.summary.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                {note.pdf && (
                    <button
                        onClick={() => window.open(note.pdf, "_blank")}
                        className='do'
                    >
                        View Pdf 📋
                    </button>
                )}
            </div>

            <button onClick={backnotes} className='backbtn'>
                Back
            </button>
        </div>
    )
}

export default Detail
