import './Guide.css'

export function Guide() {
    return (
        <div className='guide'>
            <h1>Guide</h1>
            <div className="guide-list">
                <div className="guide-group">
                    <h3>Guida per i controlli</h3>
                    <a href="./GuidaControlli.pdf">Guida completa</a>
                    <ul>
                        <li><a href="./Introduzione.pdf">Teoria - Introduzione</a></li>
                        <li><a href="./Minecraft.pdf">Teoria - Minecraft</a></li>
                        <li><a href="./Prefetch.pdf">Teoria - Prefetch</a></li>
                        <li><a href="./Processi.pdf">Teoria - Processi e memoria</a></li>
                        <li><a href="./Journal.pdf">Teoria - File system e journaling</a></li>
                        <li><a href="./Eventi.pdf">Teoria - Registri ed eventi</a></li>
                        <li><a href="./Tools.pdf">Pratica - Guida ai tools</a></li>
                        <li><a href="./Metodi.pdf">Pratica - Metodi bypass e come trovarli</a></li>
                        <li><a href="./Conclusione.pdf">Teoria - Conclusione</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}