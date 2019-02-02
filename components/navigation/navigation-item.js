import { GenericLink } from '~/components/text/link'
import cn from 'classnames'

const NavigationItem = ({ active, children, className, href, onClick }) => (
  <span className={cn({ active }, className, 'navigation-item')}>
    <GenericLink prefetch href={href} as={href} onClick={onClick}>
      {children}
    </GenericLink>
    <style jsx>{`
      .navigation-item :global(a) {
        color: #999;
        display: inline-block;
        font-size: 12px;
        font-weight: normal;
        line-height: 30px;
        padding: 10px;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.2s ease;
        vertical-align: middle;
      }

      .navigation-item.active :global(a),
      .navigation-item :global(a:hover) {
        color: #000;
        text-decoration: none;
      }

      @media screen and (max-width: 950px) {
        .navigation-item :global(a) {
          font-size: 14px;
        }
      }
    `}</style>
  </span>
)

export default NavigationItem
