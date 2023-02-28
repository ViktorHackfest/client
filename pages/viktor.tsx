import { Checkbox, FormControl, Stack } from '@chakra-ui/react';
import {
  Body,
  Button,
  Card,
  Datepicker,
  FormLabel,
  Header,
  InputField,
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
  return (
    <div>
      <div className="flex justify-center">
        <Header preset="t1" className="font-bold m-16">
          Viktor
        </Header>
      </div>
      <TypographySection />
      <ToastSection />
      {/* <ToastExample /> */}
      <ButtonSection />
      <TextFieldSection />
      <ColorSection />
      <DatepickerSection />
    </div>
  );
};

function TypographySection() {
  return (
    <div className="w-[85%] mx-auto mb-16">
      <Card preset="dark">
        <Header preset="h2" className="font-bold">
          Typography
        </Header>
        <Header preset="h5" className="py-4">
          Header - Nunito
        </Header>
        <Card preset="light">
          <div className="flex gap-32">
            <div>t1</div>
            <div>72px</div>
            <div>4.5rem</div>
            <Header preset="t1" className="pb-8">
              Lorem ipsum.
            </Header>
          </div>
          <div className="flex gap-32">
            <div>t2</div>
            <div>60px</div>
            <div>3.75rem</div>
            <Header preset="t2" className="pb-6">
              Lorem ipsum.
            </Header>
          </div>
          <div className="flex gap-32">
            <div>h1</div>
            <div>48px</div>
            <div>3rem</div>
            <Header preset="h1" className="pb-4">
              Lorem ipsum.
            </Header>
          </div>
          <div className="flex gap-32">
            <div>h2</div>
            <div>36px</div>
            <div>2.25rem</div>
            <Header preset="h2" className="pb-2">
              Lorem ipsum.
            </Header>
          </div>
          <div className="flex gap-32">
            <div>h3</div>
            <div>32px</div>
            <div>2rem</div>
            <Header preset="h3">Lorem ipsum.</Header>
          </div>
          <div className="flex gap-32">
            <div>h4</div>
            <div>28px</div>
            <div>1.75rem</div>
            <Header preset="h4">Lorem ipsum.</Header>
          </div>
          <div className="flex gap-32">
            <div>h5</div>
            <div>24px</div>
            <div>1.5rem</div>
            <Header preset="h5">Lorem ipsum.</Header>
          </div>
          <div className="flex gap-32">
            <div>h6</div>
            <div>20px</div>
            <div>1.25rem</div>
            <Header preset="h6">Lorem ipsum.</Header>
          </div>
        </Card>
        <Header preset="h5" className="py-4">
          Body - Nunito
        </Header>
        <Card preset="light">
          <div className="flex gap-32">
            <div>b1</div>
            <div>24px</div>
            <div>1.5rem</div>
            <Body preset="b1">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>b2</div>
            <div>20px</div>
            <div>1.25rem</div>
            <Body preset="b2">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>b3</div>
            <div>16px</div>
            <div>1rem</div>
            <Body preset="b3">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>b4</div>
            <div>14px</div>
            <div>0.875rem</div>
            <Body preset="b4">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>b5</div>
            <div>12px</div>
            <div>0.75rem</div>
            <Body preset="b5">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>c1</div>
            <div>12px</div>
            <div>0.75rem</div>
            <Body preset="c1">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>c2</div>
            <div>11px</div>
            <div>0.6875rem</div>
            <Body preset="c2">Lorem ipsum.</Body>
          </div>
          <div className="flex gap-32">
            <div>f&nbsp;&nbsp;</div>
            <div>10px</div>
            <div>0.625rem</div>
            <Body preset="f">Lorem ipsum.</Body>
          </div>
        </Card>
      </Card>
    </div>
  );
}

function ToastSection() {
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
  return (
    <div className="flex flex-col bg-white w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-red-200 mb-16">
      <Header preset="h2" className="text-center font-bold mt-4 mb-10">
        Toast
      </Header>
      <div className="flex justify-between mx-48">
        <Button
          preset="text"
          onClick={() => errorToast()}
          className="text-white bg-red-500 px-8"
        >
          Error
        </Button>
        <Button
          preset="text"
          onClick={() => warningToast()}
          className="text-white bg-yellow-500 px-8"
        >
          Warning
        </Button>
        <Button
          preset="text"
          onClick={() => successToast()}
          className="text-white bg-green-500 px-8"
        >
          Success
        </Button>
        <Button
          preset="text"
          onClick={() => infoToast()}
          className="text-white bg-blue-500 px-8"
        >
          Info
        </Button>
      </div>
    </div>
  );
}

function ButtonSection() {
  return (
    <div className="flex flex-col bg-white w-[90%] mx-auto rounded-3xl p-10 shadow-lg shadow-red-200">
      <Header preset="h2" className="text-center font-bold m-4">
        Button
      </Header>

      <div className="flex flex-wrap justify-evenly items-center gap-8 p-3 text-denim-dark">
        <Header preset="h6">Primary</Header>
        <Header preset="h6">Secondary</Header>
        <Header preset="h6">Tertiary</Header>
        <Header preset="h6">Link</Header>
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
  );
}

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
    <div className="flex flex-col bg-white w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-red-200 my-16">
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
    </div>
  );
}

function ColorSection() {
  return (
    <div className="flex flex-col bg-white w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-red-200">
      <Header preset="h2" className="text-center font-bold m-4">
        Color
      </Header>

      <div className="m-6">
        <Header preset="h6" className="text-center">
          Gray
        </Header>
        <div className="h-4"></div>
        <div className="bg-gray-100 p-4">gray-100</div>
        <div className="bg-gray-200 p-4">gray-200</div>
        <div className="bg-gray-300 p-4">gray-300</div>
        <div className="bg-gray-400 p-4">gray-400</div>
        <div className="bg-gray-500 p-4">gray-500</div>
        <div className="bg-gray-600 p-4">gray-600</div>
      </div>

      <div className="m-6">
        <Header preset="h6" className="text-center">
          Red
        </Header>
        <div className="h-4"></div>
        <div className="bg-red-100 p-4">red-100</div>
        <div className="bg-red-200 p-4">red-200</div>
        <div className="bg-red-300 p-4">red-300</div>
        <div className="bg-red-400 p-4">red-400</div>
        <div className="bg-red-500 p-4">red-500</div>
        <div className="bg-red-600 p-4">red-600</div>
      </div>

      <div className="m-6">
        <Header preset="h6" className="text-center">
          Yellow
        </Header>
        <div className="h-4"></div>
        <div className="bg-yellow-100 p-4">yellow-100</div>
        <div className="bg-yellow-200 p-4">yellow-200</div>
        <div className="bg-yellow-300 p-4">yellow-300</div>
        <div className="bg-yellow-400 p-4">yellow-400</div>
        <div className="bg-yellow-500 p-4">yellow-500</div>
        <div className="bg-yellow-600 p-4">yellow-600</div>
      </div>

      <div className="m-6">
        <Header preset="h6" className="text-center">
          Green
        </Header>
        <div className="h-4"></div>
        <div className="bg-green-100 p-4">green-100</div>
        <div className="bg-green-200 p-4">green-200</div>
        <div className="bg-green-300 p-4">green-300</div>
        <div className="bg-green-400 p-4">green-400</div>
        <div className="bg-green-500 p-4">green-500</div>
        <div className="bg-green-600 p-4">green-600</div>
      </div>

      <div className="m-6">
        <Header preset="h6" className="text-center">
          Blue
        </Header>
        <div className="h-4"></div>
        <div className="bg-blue-100 p-4">blue-100</div>
        <div className="bg-blue-200 p-4">blue-200</div>
        <div className="bg-blue-300 p-4">blue-300</div>
        <div className="bg-blue-400 p-4">blue-400</div>
        <div className="bg-blue-500 p-4">blue-500</div>
      </div>

      <div className="m-6">
        <Header preset="h6" className="text-center">
          Pink
        </Header>
        <div className="h-4"></div>
        <div className="bg-pink-100 p-4">pink-100</div>
        <div className="bg-pink-200 p-4">pink-200</div>
        <div className="bg-pink-300 p-4">pink-300</div>
        <div className="bg-pink-400 p-4">pink-400</div>
        <div className="bg-pink-500 p-4">pink-500</div>
      </div>
    </div>
  );
}

function DatepickerSection() {
  return (
    <div className="flex flex-col bg-white w-[85%] mx-auto rounded-3xl p-10 shadow-lg shadow-red-200 my-16">
      <Header preset="h2" className="text-center font-bold m-4">
        Datepicker
      </Header>
      <div className="flex justify-center">
        <Datepicker id="birthday" name="birthday" />
      </div>
    </div>
  );
}

export default Viktor;
