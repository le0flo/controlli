import './Link.css'

export function Link() {
    return (
        <div className='link'>
            <h1>Link</h1>
            <div className="link-list">
                <div className="link-group">
                    <h3>Tool Vari</h3>
                    <ul>
                        <li><a href="https://systeminformer.sourceforge.io/">System Informer</a></li>
                        <li><a href="https://www.nirsoft.net/utils/win_prefetch_view.html">WinPrefetchView</a></li>
                        <li><a href="https://www.nirsoft.net/utils/usb_devices_view.html">USB Deview</a></li>
                        <li><a href="https://www.nirsoft.net/utils/computer_activity_view.html">LastActivityView</a></li>
                        <li><a href="https://www.nirsoft.net/utils/userassist_view.html">UserAssistView</a></li>
                        <li><a href="https://github.com/kacos2000/Win10LiveInfo">Win 10 Live info</a></li>
                        <li><a href="https://github.com/Si13n7/BinarySignatureStatus">BinarySignatureStatus</a></li>
                        <li><a href="https://ericzimmerman.github.io/#!index.md">Eric Zimmerman's Tools</a></li>
                        <li><a href="https://live.sysinternals.com/">SysInternals</a></li>
                        <li><a href="https://echo.ac/sgrm">Parser per l'srgmbroker</a></li>
                    </ul>
                </div>
                <div className="link-group">
                    <h3>Informazioni sul journal</h3>
                    <ul>
                        <li><a href="https://learn.microsoft.com/en-us/windows/win32/api/winioctl/ns-winioctl-usn_record_v2">USN Journal v2</a></li>
                        <li><a href="https://learn.microsoft.com/en-us/windows/win32/api/winioctl/ns-winioctl-usn_record_v3">USN Journal v3</a></li>
                        <li><a href="https://learn.microsoft.com/en-us/windows/win32/api/winioctl/ns-winioctl-usn_record_v4">USN Journal v4</a></li>
                        <li><a href="https://ss64.com/nt/findstr.html">Documentazione di findstr</a></li>
                    </ul>
                </div>
                <div className="link-group">
                    <h3>Curiosità varie</h3>
                    <ul>
                        <li><a href="https://alpbatursahin.medium.com/investigating-memory-forensic-processes-dlls-consoles-process-memory-and-networking-7277689a09b7">Investigazione sui processi</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}