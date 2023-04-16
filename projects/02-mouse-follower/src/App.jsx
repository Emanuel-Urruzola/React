import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setposition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // pointer move
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setposition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // --> Se ejecuta cuando se deja de renderizar y
    // --> cuando cambian las dependencias antes de ejecutar.
    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('cleanup')
    }
  }, [enabled])

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba( 0 , 0 , 0 , 0.5 )',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
