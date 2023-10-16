import '@/style/reception/footer.scss'


const Footer = () => {
  // Must add passHref to Link
  return (
    <footer className='footer'>
      <div>
        <div>
          所有作品均由小王摄影拍摄（抖音：XWSY688   小红书：小王摄影），转载必须征得本人同意后，方可转载！！！
        <code>
        <a href="mailto:mokingboygirl@gmail.com"  rel="noopener noreferrer">
          mokingboygirl@gmail.com</a>
        </code>
        </div>
        <div>&copy; 小王摄影 2022-2023</div>
      </div>

    </footer>

  )
}

export default Footer;