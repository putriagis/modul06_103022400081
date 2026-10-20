function panel ({children, judul}){
    return
    <div className="panel">
        {judul && <h1>{judul}</h1>
        {children}
    </div>
}