import Button from './Button';
import './Cards.css';

export default function Cards({ heading, message}) {
    return (
    <main>
      <div className='app'>
      <article className='cards'>
          <h2>{ heading }</h2>
          <p>{ message }</p>
          <div className='button'>
            <Button button="git-hub" />
          </div>
        </article>
      </div>
    </main>
    )
}
