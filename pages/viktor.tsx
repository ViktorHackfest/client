import { Checkbox, FormControl, Stack } from '@chakra-ui/react';
import {
  Button,
  FormLabel,
  Header,
  InputField,
  Section,
  SelectField,
  Toast,
} from '@ui';
import { NextPage } from 'next';
import Link from 'next/link';
import { HTMLInputTypeAttribute, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';

const Viktor: NextPage = () => {
  const errorToast = Toast({
    preset: 'error',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  const warningToast = Toast({
    preset: 'warning',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  const successToast = Toast({
    preset: 'success',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
  const infoToast = Toast({
    preset: 'info',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  const errorHandler = () => {
    console.log('ERROR');
    errorToast();
  };
  return (
    <div>
      <div>Viktor</div>
      <div>Typography</div>
      <div>Header</div>
      <div>
        <Header preset="t1" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="t1" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="t1" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="t2" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="t2" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="t2" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h1" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h1" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h1" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h2" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h2" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h2" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h3" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h3" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h3" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h4" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h4" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h4" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h5" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h5" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h5" className="font-light">
          Lorem ipsum.
        </Header>
        <Header preset="h6" className="font-bold">
          Lorem ipsum.
        </Header>
        <Header preset="h6" className="font-normal">
          Lorem ipsum.
        </Header>
        <Header preset="h6" className="font-light">
          Lorem ipsum.
        </Header>
        <div className="bg-danger-dark">TEST</div>
      </div>
      <div>Toast</div>
      <div>
        <button onClick={errorHandler} className="bg-danger-light">
          Error
        </button>
        <button onClick={() => warningToast()} className="bg-warning-light">
          Warning
        </button>
        <button onClick={() => successToast()} className="bg-success-light">
          Success
        </button>
        <button onClick={() => infoToast()} className="bg-cerulean">
          Info
        </button>
      </div>
      <div className="flex flex-col bg-totalwhite w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-[#ADD1E2]">
        <Header preset="h2" className="text-center text-denim-dark">
          Button
        </Header>

        <div className="flex flex-wrap justify-evenly items-center gap-8 p-3 text-denim-dark">
          <Header preset="h5">Primary</Header>
          <Header preset="h5">Secondary</Header>
          <Header preset="h5">Tertiary</Header>
          <Header preset="h5">Link</Header>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 p-6">
          <Button
            preset="primary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="primary">Button</Button>
          <Button
            preset="secondary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="secondary">Button</Button>
          <Button
            preset="tertiary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="tertiary">Button</Button>
          <Link href={'https://www.google.com'} passHref>
            <Button
              preset="text"
              leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
              rightIcon={<BsChevronRight className="h-5 w-5" />}
            >
              Button
            </Button>
          </Link>
          <Link href={'https://www.google.com'} passHref>
            <Button preset="text">Button</Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center bg-denim-dark gap-4 p-6 rounded-3xl">
          <Button
            preset="primary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="primary">Button</Button>
          <Button
            preset="secondary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="secondary">Button</Button>
          <Button
            preset="tertiary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
          >
            Button
          </Button>
          <Button preset="tertiary">Button</Button>
          <Link href={'https://www.google.com'} passHref>
            <Button
              preset="text"
              leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
              rightIcon={<BsChevronRight className="h-5 w-5" />}
            >
              Button
            </Button>
          </Link>
          <Link href={'https://www.google.com'} passHref>
            <Button preset="text">Button</Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 p-6">
          <Button
            preset="primary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
            disabled
          >
            Button
          </Button>
          <Button preset="primary" disabled>
            Button
          </Button>
          <Button
            preset="secondary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
            disabled
          >
            Button
          </Button>
          <Button preset="secondary" disabled>
            Button
          </Button>
          <Button
            preset="tertiary"
            leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
            rightIcon={<BsChevronRight className="h-5 w-5" />}
            disabled
          >
            Button
          </Button>
          <Button preset="tertiary" disabled>
            Button
          </Button>
          <Link href={'https://www.google.com'} passHref>
            <Button
              preset="text"
              leftIcon={<AiOutlinePlusCircle className="h-5 w-5" />}
              rightIcon={<BsChevronRight className="h-5 w-5" />}
              disabled
            >
              Button
            </Button>
          </Link>
          <Link href={'https://www.google.com'} passHref>
            <Button preset="text" disabled>
              Button
            </Button>
          </Link>
        </div>
      </div>
      <TextFieldSection />
      <ColorSection />
    </div>
  );
};

function TextFieldSection() {
  const [hasLabel, setHasLabel] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [hasRightIcon, setHasRightIcon] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const errorMessage = 'This is error message';
  const rightIcon = <BsChevronDown className="w-4 h-4" color="gray.300" />;
  // const inputTypeSelect = <SelectField options={[{ value: "Options1" }]} />;
  const inputTypes: HTMLInputTypeAttribute[] = [
    'text',
    'number',
    'email',
    'password',
    'tel',
    'date',
    'file',
  ];
  const inputElements = inputTypes.map((type) => (
    <InputField
      key={type}
      type={type}
      //value={"value"}
      placeholder="Enter input"
      label={hasLabel ? type : ''}
      isDisabled={isDisabled}
      isError={isError}
      errorMessage={errorMessage}
      leftIcon={
        hasLeftIcon ? (
          <BiSearch className="w-4 h-4" color="gray.300" />
        ) : undefined
      }
      rightIcon={hasRightIcon ? rightIcon : undefined}
      className="px-4"
      // innerClassName="p-6"
      dark={isDark}
      required={isRequired}
    />
  ));
  const selectElement = (
    <SelectField
      label={hasLabel ? 'Select Label' : ''}
      isDisabled={isDisabled}
      isError={isError}
      errorMessage={errorMessage}
      rightIcon={hasRightIcon ? rightIcon : undefined}
      dark={isDark}
      className="px-4"
      required={isRequired}
      options={[
        { value: 'opt1', label: 'Option 11' },
        { value: 'opt2', label: 'Option 2' },
      ]}
    >
      {/* <SelectOption value="opt1" dark={isDark}>
        Option 1
      </SelectOption>
      <SelectOption value="opt2" dark={isDark}>
        Option 2
      </SelectOption> */}
    </SelectField>
  );
  return (
    <Section>
      <Header preset="h2" className="text-center text-denim-dark">
        TextField
      </Header>
      <FormControl>
        <FormLabel>Setting</FormLabel>
        <Stack spacing={5} direction="row">
          <Checkbox onChange={(e) => setHasLabel(e.target.checked)}>
            Label
          </Checkbox>
          <Checkbox onChange={(e) => setIsDisabled(e.target.checked)}>
            Disabled
          </Checkbox>
          <Checkbox onChange={(e) => setIsError(e.target.checked)}>
            Error
          </Checkbox>
          <Checkbox onChange={(e) => setHasLeftIcon(e.target.checked)}>
            Left Icon
          </Checkbox>
          <Checkbox onChange={(e) => setHasRightIcon(e.target.checked)}>
            Right Icon
          </Checkbox>
          <Checkbox onChange={(e) => setIsDark(e.target.checked)}>
            Is Dark?
          </Checkbox>
          <Checkbox onChange={(e) => setIsRequired(e.target.checked)}>
            Is Required?
          </Checkbox>
        </Stack>
      </FormControl>
      <div>
        <div
          className={
            'p-4 flex flex-col rounded ' + (isDark ? 'bg-denim-dark' : '')
          }
        >
          {inputElements}
          {selectElement}
        </div>
      </div>
    </Section>
  );
}

function ColorSection() {
  return (
    <div>
      <div>Gray</div>
      <div className="bg-gray-100 p-4">gray-100</div>
      <div className="bg-gray-200 p-4">gray-200</div>
      <div className="bg-gray-300 p-4">gray-300</div>
      <div className="bg-gray-400 p-4">gray-400</div>
      <div className="bg-gray-500 p-4">gray-500</div>
      <div className="bg-gray-600 p-4">gray-600</div>

      <div>Red</div>
      <div className="bg-red-100 p-4">red-100</div>
      <div className="bg-red-200 p-4">red-200</div>
      <div className="bg-red-300 p-4">red-300</div>
      <div className="bg-red-400 p-4">red-400</div>
      <div className="bg-red-500 p-4">red-500</div>
      <div className="bg-red-600 p-4">red-600</div>

      <div>Yellow</div>
      <div className="bg-yellow-100 p-4">yellow-100</div>
      <div className="bg-yellow-200 p-4">yellow-200</div>
      <div className="bg-yellow-300 p-4">yellow-300</div>
      <div className="bg-yellow-400 p-4">yellow-400</div>
      <div className="bg-yellow-500 p-4">yellow-500</div>
      <div className="bg-yellow-600 p-4">yellow-600</div>

      <div>Green</div>
      <div className="bg-green-100 p-4">green-100</div>
      <div className="bg-green-200 p-4">green-200</div>
      <div className="bg-green-300 p-4">green-300</div>
      <div className="bg-green-400 p-4">green-400</div>
      <div className="bg-green-500 p-4">green-500</div>
      <div className="bg-green-600 p-4">green-600</div>

      <div>Blue</div>
      <div className="bg-blue-100 p-4">blue-100</div>
      <div className="bg-blue-200 p-4">blue-200</div>
      <div className="bg-blue-300 p-4">blue-300</div>
      <div className="bg-blue-400 p-4">blue-400</div>
      <div className="bg-blue-500 p-4">blue-500</div>

      <div>Pink</div>
      <div className="bg-pink-100 p-4">pink-100</div>
      <div className="bg-pink-200 p-4">pink-200</div>
      <div className="bg-pink-300 p-4">pink-300</div>
      <div className="bg-pink-400 p-4">pink-400</div>
      <div className="bg-pink-500 p-4">pink-500</div>
    </div>
  );
}

export default Viktor;
