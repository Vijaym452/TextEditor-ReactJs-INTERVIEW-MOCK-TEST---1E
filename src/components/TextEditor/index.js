import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  MainContainer,
  LeftSideContainer,
  Heading,
  Image,
  CardContainer,
  ButtonContainer,
  ListItem,
  TextArea,
  CustomButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state

    return (
      <AppContainer>
        <MainContainer>
          <LeftSideContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftSideContainer>
          <CardContainer>
            <ButtonContainer>
              <ListItem>
                <CustomButton
                  type="button"
                  applied={isBold}
                  data-testid="bold"
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </CustomButton>
              </ListItem>

              <ListItem>
                <CustomButton
                  type="button"
                  applied={isItalic}
                  data-testid="italic"
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </CustomButton>
              </ListItem>

              <ListItem>
                <CustomButton
                  type="button"
                  applied={isUnderLine}
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </CustomButton>
              </ListItem>
            </ButtonContainer>
            <TextArea
              type="text"
              cols="40"
              rows="20"
              isBold={isBold}
              isItalic={isItalic}
              isUnderLine={isUnderLine}
            />
          </CardContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
