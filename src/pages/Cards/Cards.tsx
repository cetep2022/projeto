
import './Cards.css'
export default function Cards() {
    return (
       <div className="d-flex">
          <div className="d-width-card">
            <h2>Meu perfil 1</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis quas aut harum maiores ipsum corporis sint laboriosam vero similique laudantium, nesciunt repudiandae aspernatur, expedita fugiat ex, animi possimus esse!
            </p>
            <div className='d-button-flex'>
             <a href="">git-hub</a>
           </div>
          </div>
          <div className="d-width-card">
            <h2>Meu perfil 2</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis quas aut harum maiores ipsum corporis sint laboriosam vero similique laudantium, nesciunt repudiandae aspernatur, expedita fugiat ex, animi possimus esse!
            </p>
           <div className='d-button-flex'>
             <a href="">git-hub</a>
           </div>
          </div>
       </div>
    )
}
