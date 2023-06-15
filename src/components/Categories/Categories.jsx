import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://i.pinimg.com/736x/4e/aa/fa/4eaafa854b6cfaeda416541bfdae9129.jpg" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button>
            </div>
            <div className="row"><img src="https://i.pinimg.com/564x/88/65/3c/88653c5c349ce3ee6842f472d4b8b82c.jpg" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button></div>

        </div>
        <div className="col">
            <div className="row"><img src="https://i.pinimg.com/564x/89/d3/1d/89d31ddf36e6adfd0c257c4cface8819.jpg" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button></div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row"><img src="https://i.pinimg.com/564x/c5/1c/19/c51c19fc587a50cedaf443efc6b94a90.jpg" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button></div>
                </div>
            
            <div className="col"><div className="row"><img src="https://i.pinimg.com/564x/38/d8/4a/38d84a73fdff4ec429c44215294e67ae.jpg" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button></div></div></div>
            <div className="row"><img src="https://i.pinimg.com/564x/db/9b/3e/db9b3ea54c04a022c8f0686569fa4b4e.jpg" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button></div>

        </div>
    </div>
  )
}

export default Categories