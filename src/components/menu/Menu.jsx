import './menu.scss'

export default function Menu({menuOpen,setMenuOPen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOPen(false)}>
                <a href='#intro'>Home</a>
            </li>

            <li onClick={()=>setMenuOPen(false)}>
                <a href='#about'>About</a>
            </li>
            <li onClick={()=>setMenuOPen(false)}>
                <a href='#portfolio'>Project</a>
            </li>
            <li onClick={()=>setMenuOPen(false)}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
      
    </div>
  )
}
