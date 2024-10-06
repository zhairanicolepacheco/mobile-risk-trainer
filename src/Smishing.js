import React from 'react';
import { View, Button, StyleSheet, ScrollView, Text, Linking, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

export default function Smishing({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Animated.Image
        source={require('../assets/smishing2.png')}
        style={styles.image}
        sharedTransitionTag="tag"
      />

      <View style={styles.content}>
        <Text style={styles.heading}>WHAT IS SMISHING?</Text>
        <Text style={styles.paragraph}>
          Smishing is a social engineering attack that combines SMS (short message service) with phishing.
          Scammers or attackers send fake messages containing harmful links to deceive individuals into compromising
          their mobile phones, which can have serious consequences such as financial loss, identity theft, and compromised personal information.
        </Text>

        <Text style={styles.heading}>CAUSE & EFFECTS OF SMISHING</Text>

        <Text style={styles.subheading}>Causes of Smishing</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>1. Taking Advantage of Trust in SMS:</Text> People tend to trust text messages more than emails, which often get caught in spam filters. Hackers take advantage of this trust by sending fake messages that look real.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>2. Less Security on Mobile Devices:</Text> Mobile phones usually don’t have the same security features as computers, and a lot of people don’t use security apps on their phones, making smishing easier.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>3. Pretending to Be Legitimate Organizations:</Text> Attackers often pose as trusted companies like banks, tricking people into believing the message is real.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>4. Easy Access to Personal Information:</Text> Data breaches and personal info shared online have made it easier for attackers to create convincing, personalized messages.
        </Text>

        <Text style={styles.subheading}>Effects of Smishing</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>1. Identity Theft:</Text> Scammers can collect personal info like Social Security numbers to open accounts or apply for loans in the victim’s name.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>2. Loss of Money:</Text> Many attacks aim to steal credit card or bank details, leading to unauthorized charges or withdrawals.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>3. Stolen Accounts:</Text> Victims may give up login info, allowing attackers to take over accounts and access sensitive information.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>4. Malware on Phones:</Text> Some smishing texts contain links that download malware onto the victim’s phone, potentially stealing passwords and personal data.
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>References</Text>
        <Text
          style={styles.reference}
          onPress={() => Linking.openURL('https://www.researchgate.net/publication/366656299_Users_really_do_respond_to_smishing')}
        >
          Rahman, M. L., Timko, D., Wali, H., & Neupane, A. (2022, December 26). Users really do respond to smishing.
        </Text>
        <Text
          style={styles.reference}
          onPress={() => Linking.openURL('https://web.archive.org/web/20220309084752/https:/www.ijcit.com/index.php/ijcit/article/download/201/55')}
        >
          Njuguna, D., Kamau, J., & Kaburu, D. (2022, February). A Review of Smishing Attacks Mitigation Strategies.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  content: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
  reference: {
    fontSize: 14,
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#059212',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainer: {
  paddingBottom: 150,
  },
});
