import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom:1rem;
    /* align-items: center;
    justify-content: center; */

    @media(min-width:768px){
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #809580;
    font-weight: 700;
    font-family: 'PT Sans',sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type{
        margin-right: 0;
    }
    &.pagina-actual{
        border-bottom: 2px solid #809580;
    }
`;

const Navegation = () => {
    return ( 
        <Nav>
            <NavLink activeClassName="pagina-actual" to={"/"}>Proyectos</NavLink>
            <NavLink activeClassName="pagina-actual" to={'/contacto'}>Contacto</NavLink>
        </Nav>
     );
}
 
export default Navegation;
