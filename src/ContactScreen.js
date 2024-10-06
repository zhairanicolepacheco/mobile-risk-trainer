import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  
  // Fetch contacts from the phone
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      } else {
        Alert.alert('Permission to access contacts is denied');
      }
    })();
  }, []);

  // Sort contacts alphabetically
  const sections = React.useMemo(() => {
    const sectionsMap = contacts.reduce((acc, item) => {
      const [lastName] = item.name.split(' ').reverse();
      return Object.assign(acc, {
        [lastName[0]]: [...(acc[lastName[0]] || []), item],
      });
    }, {});

    return Object.entries(sectionsMap)
      .map(([letter, items]) => ({
        letter,
        items,
      }))
      .sort((a, b) => a.letter.localeCompare(b.letter));
  }, [contacts]);

  return (
    <SafeAreaView style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contacts</Text>
        </View>

        {sections.map(({ letter, items }) => (
          <View style={styles.section} key={letter}>
            <Text style={styles.sectionTitle}>{letter}</Text>
            <View style={styles.sectionItems}>
              {items.map(({ imageAvailable, image, name, phoneNumbers }, index) => {
                return (
                  <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity onPress={() => { /* handle onPress */ }}>
                      <View style={styles.card}>
                        {imageAvailable && image ? (
                          <Image
                            alt=""
                            resizeMode="cover"
                            source={{ uri: image.uri }}
                            style={styles.cardImg}
                          />
                        ) : (
                          <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{name[0]}</Text>
                          </View>
                        )}

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{name}</Text>
                          <Text style={styles.cardPhone}>
                            {phoneNumbers && phoneNumbers.length > 0 ? phoneNumbers[0].number : 'No phone number'}
                          </Text>
                        </View>

                        <View style={styles.cardAction}>
                          <FeatherIcon color="#9ca3af" name="chevron-right" size={22} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  section: {
    marginTop: 12,
    paddingLeft: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  sectionItems: {
    marginTop: 8,
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
