type Props = {
  texto: string
  cita: string
  background: string
  width: number
  height: number
}

export function buildLayout({
  texto,
  cita,
  background,
  width,
  height,
}: Props): JSX.Element {
  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px',
        background,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial',
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height,
          background: 'rgba(0,0,0,0.4)',
        }}
      />

      <div style={{ zIndex: 1 }}>
        <p
          style={{
            fontSize: 64,
            lineHeight: 1.3,
            wordWrap: 'break-word',
          }}
        >
          {texto}
        </p>

        <p
          style={{
            fontSize: 36,
            marginTop: 40,
          }}
        >
          {cita}
        </p>
      </div>
    </div>
  )
}