import './Notes.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Notes() {

    const navigate = useNavigate()

    const [allnotedata, Setallnotedata] = useState([])
    const [searchnotes, Setsearchnotes] = useState('')
    const [yearfilter, Setyearfilter] = useState('all')

    useEffect(() => {
        axios.get('/api/notes')
            .then((response) => {
                Setallnotedata(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const filternotes = allnotedata.filter((note) => {
        const matchesSearch = note.title
            .toLowerCase()
            .includes(searchnotes.toLowerCase())

        const matchesYear =
            yearfilter === "all" ||
            note.year.toLowerCase() === yearfilter.toLowerCase()

        return matchesSearch && matchesYear;
    })



    return (
        <>
            {filternotes.length === 0 && (
                <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
                    No notes found 📭
                </h2>
            )}

            <div className="topsection">
                <h1 className="title">My Notes</h1>
                <div className="leftportion">
                    <div className="search">
                        <input type="text" value={searchnotes} onChange={(e) => {
                            Setsearchnotes(e.target.value)
                        }} placeholder='Search Notes...' />
                    </div>
                    <div className="filter">
                        <select onChange={(el) => (
                            Setyearfilter(el.target.value)
                        )} >
                            <option value="all">All</option>
                            <option value="1st year">1st Year</option>
                            <option value="2nd year">2nd Year</option>
                            <option value="3rd year">3rd Year</option>
                            <option value="4th year">4th Year</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="shownotes">
                {filternotes.map((item) => (
                    <div key={item.id} className="cardcontent">
                        <div className="display">
                            <h2 className='title'>{item.title}</h2>
                            <p>{item.type}</p>
                            <h5>{item.subject}</h5>
                            <small>{item.year}</small>
                            <h4>{item.createdAt}</h4>
                            <button onClick={() => navigate(`/notes/${item.id}`)} className='btn'>View Details</button>
                        </div>
                    </div>
                ))}
            </div >

        </>
    )
}

export default Notes
