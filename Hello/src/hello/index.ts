import { Rule, SchematicContext, Tree, url, apply, template, mergeWith, MergeStrategy, SchematicsException, move } from '@angular-devkit/schematics';
import { buildDefaultPath } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Schema } from './schema';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function getService(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read('angular.json'); // read angular.json as buffer
    if (!workspaceConfigBuffer) { // make sure if we are in angular CLI workspace
      throw new SchematicsException('not an angular CLI workspace');
    }
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString()); // parse config
    const projectName = _options.project || workspaceConfig.defaultProject; // --project or default
    const project = workspaceConfig.projects[projectName]; // get the project definition

    // First of all, buildDefaultPath(project) gets default for project
    const defaultProjectPath = buildDefaultPath(project);

    // Second, _options.name can contain path eg: some-feature/some-sub-feature/some-service
    const parsedPath = parseName(defaultProjectPath, _options.name);
    const { name, path } = parsedPath;


    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        name,
        changeName
      }),
      move(path)
    ]);

    return mergeWith(sourceParametrizedTemplates, MergeStrategy.Overwrite)(tree, _context);
  };
}

export function changeName(name: string): string {
  if (~name.lastIndexOf('/')) {
    return name.substring(name.lastIndexOf('/'), name.length);
  }
  return name;
}

