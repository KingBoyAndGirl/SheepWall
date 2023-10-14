import '@/style/reception/footer.scss'


const Footer = () => {
  // Must add passHref to Link
  return (
    <footer className='footer'>
      <div>
        <div>
        部分资源来自网络，如有侵权请联系
        <code>
        <a href="mailto:mokingboygirl@gmail.com"  rel="noopener noreferrer">
          mokingboygirl@gmail.com</a>
        </code>

        处理
        </div>

        <div>&copy; 小王摄影 2022-2023</div>
      </div>

    </footer>

  )
}

export default Footer;