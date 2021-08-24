function Header(props){
  console.log(props)

    return (
        <header onClick={props.onClick}>
            Nome: {props.name}
        </header>
    );
}

export default Header;