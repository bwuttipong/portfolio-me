import profileImg from './assets/images/profile.jpg'
import './App.css'

const INSTAGRAM_IMAGES = [
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&q=75',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&q=75',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=75',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=75',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=75',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=75',
]

function App() {
  return (
    <>
      <div className="profile">
        <img src={profileImg} alt="Wuttipong Thongmon" />
      </div>
      <article className="article">
        <h2 className="greeting">Hey,</h2>
        <h1 className="name">I'm Wuttipong Thongmon</h1>
        <h3 className="message">
          I'm a <a href="https://github.com/bestwuttipong" target="_blank" rel="noreferrer">web developer</a>, and I love <a href="https://instagram.com/bestwuttipong" target="_blank" rel="noreferrer">finding something new</a>. Send me an <a href="mailto:hi@bestwuttipong.dev">email</a>.
        </h3>
        <div className="instagram">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <a key={i} href="https://instagram.com/bestwuttipong" target="_blank" rel="noreferrer">
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </article>
    </>
  )
}

export default App
