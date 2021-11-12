import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Feed() {
  return (
    <View style={styles.feed}>
      <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image
              style={styles.postheaderimg}
              source={require('../assets/images/piupiu.jpg')}
            />
            <Text>Piu Piu</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={16} color="black" />
        </View>
        {/* aspectRatio={altura/largura}   1280/720=1,7777  CSS height: undefined*/}
        <Image
          style={styles.postimg}
          aspectRatio={1.777}
          source={require('../assets/images/tinytoons.jpg')}
        />
        <View style={styles.footer}>
          <FontAwesome5
            style={styles.footericon}
            name="heart"
            size={36}
            color="black"
          />
          <FontAwesome5
            style={styles.footericon}
            name="comment"
            size={36}
            color="black"
          />
        </View>
      </View>
      <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image
              style={styles.postheaderimg}
              source={require('../assets/images/pernalonga.png')}
            />
            <Text>Pernalonga</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={16} color="black" />
        </View>
        <Image
          style={styles.postimg}
          aspectRatio={1.777}
          source={require('../assets/images/tinytoons3.jpg')}
        />
        <View style={styles.footer}>
          <FontAwesome5
            style={styles.footericon}
            name="heart"
            size={36}
            color="black"
          />
          <FontAwesome5
            style={styles.footericon}
            name="comment"
            size={36}
            color="black"
          />
        </View>
      </View>
      <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image
              style={styles.postheaderimg}
              source={require('../assets/images/taz.jpg')}
            />
            <Text>Taz</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={16} color="black" />
        </View>
        <Image
          style={styles.postimg}
          aspectRatio={1.777}
          source={require('../assets/images/tinytoons2.jpg')}
        />
        <View style={styles.footer}>
          <FontAwesome5
            style={styles.footericon}
            name="heart"
            size={36}
            color="black"
          />
          <FontAwesome5
            style={styles.footericon}
            name="comment"
            size={36}
            color="black"
          />
        </View>
      </View>
      <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image
              style={styles.postheaderimg}
              source={require('../assets/images/felicia.png')}
            />
            <Text>Felicia</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={16} color="black" />
        </View>
        <Image
          style={styles.postimg}
          aspectRatio={1.777}
          source={require('../assets/images/tinytoons.jpg')}
        />
        <View style={styles.footer}>
          <FontAwesome5
            style={styles.footericon}
            name="heart"
            size={36}
            color="black"
          />
          <FontAwesome5
            style={styles.footericon}
            name="comment"
            size={36}
            color="black"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: 'red'
  },
  post: {
    backgroundColor: '#fff'
  },
  postheader: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
  postheaderesquerda: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 5
  },
  postimg: {
    width: '100%',
    height: undefined
  },
  footer: {
    height: 60,
    backgroundColor: '#eee',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  footericon: {
    margin: 5
  }
})
