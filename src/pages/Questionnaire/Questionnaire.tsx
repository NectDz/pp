import React, { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  Heading,
  Text,
  Input,
  Select,
  FormControl,
  FormLabel,
  Container,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    provider: '',
    customProvider: '',
    acceptedTOS: false,
    conditions: '',
    medications: '',
    familyHistory: '',
    lifestyle: '',
    symptoms: '',
    allergies: '',
    surgeries: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProviderChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, provider: value });
    if (value !== 'other') {
      setFormData({ ...formData, customProvider: '' });
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (formData.acceptedTOS) {
      setStep(2);
    } else {
      alert('You must accept the TOS and HIPAA agreement to continue.');
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.provider === 'other' && !formData.customProvider) {
      alert('Please enter your custom health insurance provider.');
    } else if (!formData.provider) {
      alert('Please select a health insurance provider.');
    } else {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container
      maxW="3xl" // Increased size for a larger form
      py={10}
      bg="#F5F5F5"
      borderRadius="xl"
      boxShadow="lg"
      px={10} // Added padding for a more spacious feel
    >
      {/* Step 1: Basic Information */}
      {step === 1 && (
        <Box textAlign="center">
          <Heading mb={6} fontSize="3xl" color="#2C6975">
            Patient Health Questionnaire
          </Heading>
          <Text mb={4} fontSize="lg" color="#2C6975">
            Your Information is Important
          </Text>
          <Box bg="#FFFFFF" p={8} borderRadius="xl" boxShadow="base">
            <Text mb={4} color="#2C6975" fontSize="md">
              The information you provide will be used to generate personalized
              health insights to improve your care.
            </Text>
            <Text mb={4} color="#2C6975" fontSize="md">
              Please complete this questionnaire to help us better understand
              your health profile.
            </Text>
            <Text mb={2} fontSize="sm" color="#2C6975">
              Estimated time: 4 minutes
            </Text>
            <Checkbox
              mb={4}
              isChecked={formData.acceptedTOS}
              onChange={(e) =>
                setFormData({ ...formData, acceptedTOS: e.target.checked })
              }
              colorScheme="teal"
            >
              I agree to the Terms of Service and HIPAA Agreement
            </Checkbox>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleContinue}
              width="100%"
              borderRadius="md"
              bg="#2C6975"
              color="#FFFFFF"
              _hover={{ bg: "#68B2A0" }}
            >
              Start Questionnaire
            </Button>
          </Box>
          <Text mt={4} fontSize="sm" color="#2C6975">
            All information provided is confidential and will be used to generate
            personalized health insights.
          </Text>
        </Box>
      )}

      {/* Step 2: Health Insurance Information */}
      {step === 2 && (
        <Box>
          <Heading mb={6} textAlign="center" fontSize="2xl" color="#2C6975">
            Basic Information & Medical History
          </Heading>
          <form onSubmit={handleNext}>
            <VStack spacing={5}>
              <FormControl id="name" isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  bg="#FFFFFF"
                  size="lg"
                  borderRadius="md"
                  borderColor="#68B2A0"
                />
              </FormControl>

              <FormControl id="dob" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  bg="#FFFFFF"
                  size="lg"
                  borderRadius="md"
                  borderColor="#68B2A0"
                />
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel>Your Phone Number</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  bg="#FFFFFF"
                  size="lg"
                  borderRadius="md"
                  borderColor="#68B2A0"
                />
              </FormControl>

              <FormControl id="provider" isRequired>
                <FormLabel>Your Health Insurance Provider</FormLabel>
                <Select
                  name="provider"
                  value={formData.provider}
                  onChange={handleProviderChange}
                  placeholder="Select your healthcare provider"
                  bg="#FFFFFF"
                  size="lg"
                  borderRadius="md"
                  borderColor="#68B2A0"
                >
                  <option value="provider1">Health First</option>
                  <option value="provider2">Fidelis</option>
                  <option value="provider3">Emblem Health</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              {formData.provider === 'other' && (
                <FormControl id="customProvider" isRequired>
                  <FormLabel>Enter Your Health Insurance Provider</FormLabel>
                  <Input
                    type="text"
                    name="customProvider"
                    value={formData.customProvider}
                    onChange={handleChange}
                    placeholder="Enter your health insurance provider"
                    bg="#FFFFFF"
                    size="lg"
                    borderRadius="md"
                    borderColor="#68B2A0"
                  />
                </FormControl>
              )}

              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                width="100%"
                borderRadius="md"
                bg="#2C6975"
                color="#FFFFFF"
                _hover={{ bg: "#68B2A0" }}
              >
                Next
              </Button>
            </VStack>
          </form>
        </Box>
      )}

      {/* Step 3: Detailed Health Information */}
      {step === 3 && (
        <Box>
          <Heading mb={6} textAlign="center" fontSize="2xl" color="#2C6975">
            Health Information
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl id="conditions" isRequired>
                <FormLabel fontSize="lg" fontWeight="medium" color="#2C6975">
                  Do you have any known medical conditions?
                </FormLabel>
                <Textarea
                  placeholder="List conditions such as diabetes, hypertension, etc."
                  name="conditions"
                  value={formData.conditions}
                  onChange={handleChange}
                  bg="#FFFFFF"
                  size="lg"
                  borderRadius="md"
                  borderColor="#68B2A0"
                  focusBorderColor="#68B2A0"
                  _hover={{ borderColor: "#68B2A0" }}
                  _focus={{ borderColor: "#68B2A0", boxShadow: "0 0 0 1px #68B2A0" }}
                  p={4}
                />
              </FormControl>





              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                width="100%"
                borderRadius="md"
                bg="#2C6975"
                color="#FFFFFF"
                _hover={{ bg: "#68B2A0" }}
                p={6}
                fontWeight="bold"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      )}
    </Container>
  );
};

export default App;
