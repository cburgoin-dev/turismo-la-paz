import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    Dimensions,
    FlatList,
    StyleSheet,
    View
} from 'react-native';

import GroupCard from '../components/GroupCard';
import Hero from '../components/Hero';
import LanguageButton from '../components/LanguageButton';

import { ITEM_GROUPS } from '../config/itemGroups';
import { GROUPS_SCREEN } from '../config/uiConfig';

import { useT } from '../translations';

import { RootStackParamList } from '../types/navigation';

const { height } = Dimensions.get('window');

const CARD_HEIGHT = height * 0.29;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Group'>;

type GroupRow = [
    (typeof ITEM_GROUPS)[number] | null,
    (typeof ITEM_GROUPS)[number] | null
];

export default function GroupsScreen() {
    const navigation = useNavigation<NavigationProp>();

    const t = useT();

    // Split groups into rows of 2 items
    const rows: GroupRow[] =
        ITEM_GROUPS.reduce<GroupRow[]>(
            (acc, group, index) => {
                if (index % 2 === 0) {
                    acc.push([group, null]);
                } else {
                    acc[acc.length - 1][1] = group;
                }

                return acc;
            },
            []
        );

    function handlePressGroup(
        group: (typeof ITEM_GROUPS)[number]
    ) {
        navigation.navigate(
            group.route,
            group.params
        );
    }

    return (
        <View style={styles.container}>
            <Hero
                image={GROUPS_SCREEN.hero}
                title={t('ui.group.title')}
                subtitle="La Paz, Baja California Sur"
                showOverlay={false}
            />

            <View style={styles.languageWrapper}>
                <LanguageButton />
            </View>

            <FlatList
                data={rows}
                keyExtractor={(_, index) => String(index)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.grid}
                renderItem={({ item: row }) => (
                    <View style={styles.row}>
                        {row.map((group, index) =>
                            group ? (
                                <View 
                                    key={group.key} 
                                    style={styles.cardWrapper}
                                >
                                    <GroupCard
                                        titleKey={group.titleKey}
                                        subtitleKey={group.subtitleKey}
                                        image={group.image.source}
                                        onPress={() => handlePressGroup(group)}
                                    />
                                </View>
                            ) : (
                                <View 
                                    key={`empty-${index}`} 
                                    style={
                                        styles.cardWrapper
                                    } 
                                />
                            )
                        )}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    grid: {
        paddingTop: 20,
        paddingHorizontal: 12,
    },

    languageWrapper: {
        position: 'absolute',

        top: 15,
        right: 10,

        zIndex: 10,
    },

    row: {
        flexDirection: 'row',

        justifyContent: 'space-between',

        marginBottom: 16,
    },

    cardWrapper: {
        width: '48%',
        height: CARD_HEIGHT,
    },
});