import "systemjs/dist/system"; // the same as <script src="system.js"></script> from documentation
import "systemjs/dist/extras/amd";
import "systemjs/dist/extras/named-register";
import "systemjs/dist/extras/named-exports"; // the non-default exports
import "systemjs/dist/extras/transform"; // for new features

// no type is ok due to "strict: false" in tsconfig:
export default async ({ apps, navigations, config }) => {
	const appCurrPath = location.pathname; // the current url of the app, e.g. "/dummy"
	// TODO: get the root path if it is complex, e.g. /dummy/init/login
	const appName = appCurrPath.replace("/", "");
	const appPath = `static/${appName}/${apps[appName].version}/index.js`;

	const { default: component, mount, unmount } = await System.import(appPath);

	mount(component);
};

const staticServer = "static/dummy/0.0.0/index.js";
System.import(staticServer); // eats Dummy (dist)
