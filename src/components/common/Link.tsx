
/**
 * @function Link
 * @name Link
 * @description Custom link component that omits the 'onClick' and 'href' attributes and provides a default click handler.
 * @param {Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'>} rest - Remaining props applied to the <a> element.
 * @returns {JSX.Element} The link element with a custom click handler.
 */
export const Link = ({...rest}:Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>,'onClick' | 'href'>) => {

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        console.log('Link clicked')
    }

    return (
    <a {...rest} onClick={onClick}></a>
  )
}
