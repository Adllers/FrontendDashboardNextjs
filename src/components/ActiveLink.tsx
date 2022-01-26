import Link, { LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    // recebe um component react
    children: ReactElement;

    shouldMatchExactHref?: boolean; 
}

export function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps) {
    
    const { asPath } = useRouter()

    let isActive = false;

    // link deve ser exatamente aquele desejado
    if( shouldMatchExactHref &&  (asPath == rest.href || asPath == rest.as) ){
        isActive = true;
    }

    // user/bla bla bla
    if (!shouldMatchExactHref && 
        (asPath.startsWith(String(rest.href)) || 
        asPath.startsWith(String(rest.as)))) {
            isActive = true;
        }
    
    return (
        <Link {...rest}>
            {cloneElement(children, { //clonando o primeiro elemento que vem dentro  
                color: isActive ? 'pink.400' : 'gray.50'
            
            })}

        </Link>
    )
}