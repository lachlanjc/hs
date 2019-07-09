import React from 'react'
import { Box, Text } from 'axs'
import { colors } from '../config'
import Container from './Container'
import { UL, LI, B, G, Step, StepDetail } from './More'

const Steps = () => (
  <Container width={48} mt={128} p0>
    <Step>
      <B>There is extremely broad agreement among scientists</B> that climate
      change is real and caused by humans.
      <StepDetail>
        Including 97% of scientists, the U.S. National Academy of Science, NOAA,
        NASA, and the scientific societies of all industrialized nations.
      </StepDetail>
    </Step>
    <Step>
      <Text>
        Charles Fourier discovered the impacts of CO<sub>2</sub> in 1827.
      </Text>
      <Text>
        Scientists have been publishing about climate change since the 1950s.
      </Text>
    </Step>
    <Step>
      The atmosphere now has{' '}
      <B>
        ~404 ppm CO<sub>2</sub>
      </B>{' '}
      <G>(350 ppm is safe)</G>.{' '}
      <StepDetail>
        There is no way to undo our damage, but stopping carbon pollution will
        reduce further damage.
      </StepDetail>
    </Step>
    <Step>
      Scientists project <B>9+ ºF this century</B>
      —and 4º F would be disastrous.
      <StepDetail>
        The majority of models so far have underestimated warming.
      </StepDetail>
    </Step>
    <Step>
      <B>Climate change impacts everything.</B> It is certainly unethical to
      threaten 25% of species, but the consequences of climate change to humans
      will be immense.
      <UL fontSize={4} color={colors.greyDark} mt2>
        <LI>
          Torrential rain, floods, heat waves, and drought will stress food and
          water supplies.
        </LI>
        <LI>
          Mass migrations as coastal cities go underwater: New York, Miami, New
          Orleans, San Francisco, Melbourne, etc.
        </LI>
      </UL>
    </Step>
    <Step>
      Turning off lights is easy, but real action will be in the form of new
      laws.
      <Text color={colors.blue} bold mb1>
        Get involved—call your Congressperson.
      </Text>
      <StepDetail color={colors.black}>
        63% of Americans are represented by a climate denier in Congress.
      </StepDetail>
      <StepDetail color={colors.grey} mb2>
        (who receive, on average, almost $1M from fossil fuel companies over
        their careers)
      </StepDetail>
      <Box is="a" href="http://usecalltoaction.com" target="_blank">
        <Box
          is="svg"
          css={{
            width: 216,
            height: 40
          }}
          viewBox="0 0 1867 290"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M1030 115c2.815 0 9.928.485 14 9 3.76 7.549 4 17.527 4 21 0 11.377-1.687 16.733-4 21-2.024 4.493-7.449 9-15 9-16.433 0-18-20.206-18-30 0-14.301 3.376-30 19-30zm0 72c21.491 0 35-16.915 35-42 0-21.187-11.319-41-34-41-22.585 0-35 19.452-35 41 0 18.437 8.644 42 34 42zm150-68l10 36h-20l10-36zm-16 63h33l7 25h39l-39-125h-40l-39 125h31l8-25zm-212 4h16v-68h21v-13h-58v13h21v68zm356 22c28.745 0 49.641-18.492 52-47l-35-2c-.425 10.022-4.968 20.355-17 20-17.032.355-17.762-20.86-18-33 .238-12.155.968-38.079 18-38 12.762-.079 16.757 13.156 16 24l36-2c-2.54-31.146-20.708-50-52-50-39.743 0-57 29.734-57 66 0 34.987 19.615 62 57 62zm-545-32h-49V82h-38v125h87v-31zm-286 32c28.745 0 49.64-18.492 52-47l-35-2c-.426 10.022-4.968 20.355-17 20-17.033.355-17.763-20.86-18-33 .237-12.155.967-38.079 18-38 12.761-.079 16.757 13.156 16 24l36-2c-2.541-31.146-20.71-50-53-50-38.743 0-56 29.734-56 66 0 34.987 19.615 62 57 62zm-106 50h1464V32H371v226zm-31 32h1527V0H340v290zm1061-83h36v-95h26V82h-88v30h26v95zm-806-88l10 36h-20l10-36zm-16 63h33l7 25h39L619 82h-40l-39 125h31l8-25zm288-6h-49V82h-38v125h87v-31zm615 31h38V82h-38v125zM197 96h93V65h-93v31zm0 68h93v-31h-93v31zm0-133h93V0h-93v31zM0 289h290v-31H0v31zm0-62h290v-31H0v31zm1600-119c16.205 0 18 24.483 18 37 0 11.791-1.259 35-18 35-17.742 0-19-23.209-19-35 0-12.517 1.795-37 19-37zm1 100c37.232 0 59-28.284 59-64 0-36.807-21.587-64-59-64-38.413 0-60 27.193-60 64 0 35.716 21.768 64 60 64zM123 132c-14.64 3.624-31.844-4.281-57-27-24.82-22.121-36-44.468-36-60 0-16.23 17.053-20 21-20 6.317 0 13.104 10.78 23 27 2.384 4.304-8.85 12.172-7 17 4.917 10 17.5 21.441 26 27 6.044 3.475 9.42-6.821 16-6 10.568 2.523 24.014 15.099 26 17 11.602 10.484-6.307 23.816-12 25zM1 163h165V0H1v163zm1710-14c-.12-8.873-.84-13.248-3-21v-2l11 23 36 58h31V82h-31v35l3 34-1 1-41-70h-36v125h31v-58z"
              fill="#7d287d"
            />
          </g>
        </Box>
      </Box>
    </Step>
  </Container>
)
export default Steps
