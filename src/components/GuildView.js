class GuildView extends Component {
  constructor(props) {
    console.log('Constructed is called first.', props);

    super(props);

    this.state = {
      messageCount: 0,
      guild: props.location.pathname
    };
  }

  componentWillMount() {
    console.log('ComponentWillMount is second.');

    this.interval = setInterval(() => {
      const { messageCount } = this.state;
      this.setState({ messageCount: messageCount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount is called when the component unmounts.');

    clearInterval(this.interval);
  }

  logger(messageCount) {
    switch (messageCount) {
      case 0:
        return console.log('The render method is called third.');
      default:
        return console.log('And on each re-render of the component.');
    }
  }

  render() {
    const { logger, state } = this;
    const { messageCount, guild } = state;

    logger(messageCount);

    return (
      <div>
        <h3>{ guild } has {messageCount} chronicles.</h3>
      </div>
    )
  }
}

export default GuildView;