// import BlogEditor from '@/components/ui/BlogEditor';
import NotesEditor from '@/components/ui/NotesEditor';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

const EditNotes = () => {
	return (
		<>
			<Tabs isFitted variant="enclosed">
				<TabList mb="1em">
					<Tab>Blogs editor</Tab>
					<Tab>Notes editor</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						{/* <BlogEditor /> */}
					</TabPanel>
					<TabPanel>
						<NotesEditor />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default EditNotes;
