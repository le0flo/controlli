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
                        <li><a href="./Indice.pdf">Teoria - Indice</a></li>
                        <li><a href="./Introduzione.pdf">Teoria - Introduzione</a></li>
                        <li><a href="./Minecraft.pdf">Teoria - Minecraft</a></li>
                        <li><a href="./Prefetch.pdf">Teoria - Prefetch</a></li>
                        <li><a href="./Processi e Memoria.pdf">Teoria - Processi e memoria</a></li>
                        <li><a href="./File System e Journaling.pdf">Teoria - File system e journaling</a></li>
                        <li><a href="./Registri ed Eventi.pdf">Teoria - Registri ed eventi</a></li>
                        <li><a href="./Guida ai tools.pdf">Pratica - Guida ai tools</a></li>
                        <li><a href="./Metodi bypass e come trovarli.pdf">Pratica - Metodi bypass e come trovarli</a></li>
                        <li><a href="./Conclusione.pdf">Teoria - Conclusione</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}